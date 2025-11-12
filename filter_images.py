#!/usr/bin/env python3
"""
Filter and select the best Brigade Valencia brochure images for the gallery
"""

import os
from PIL import Image
import json

def analyze_images(image_dir):
    """Analyze images and filter the best ones for gallery"""
    
    images_info = []
    
    for filename in os.listdir(image_dir):
        if filename.endswith(('.jpeg', '.jpg', '.png')):
            filepath = os.path.join(image_dir, filename)
            
            try:
                with Image.open(filepath) as img:
                    width, height = img.size
                    area = width * height
                    aspect_ratio = width / height if height > 0 else 0
                    
                    # File size in KB
                    file_size = os.path.getsize(filepath) / 1024
                    
                    images_info.append({
                        'filename': filename,
                        'width': width,
                        'height': height,
                        'area': area,
                        'aspect_ratio': aspect_ratio,
                        'file_size_kb': file_size,
                        'filepath': filepath
                    })
                    
            except Exception as e:
                print(f"Error analyzing {filename}: {e}")
    
    # Sort by area (larger images first)
    images_info.sort(key=lambda x: x['area'], reverse=True)
    
    return images_info

def select_gallery_images(images_info, max_count=20):
    """Select the best images for gallery"""
    
    gallery_images = []
    
    # Filter criteria:
    # 1. Area > 50000 pixels (reasonable size for gallery)
    # 2. File size > 10KB (avoid tiny icons/logos)
    # 3. Aspect ratio between 0.5 and 3.0 (avoid very thin strips)
    
    print("Top images by size:")
    for i, img in enumerate(images_info[:50]):  # Show top 50
        print(f"{i+1:2d}. {img['filename']} - {img['width']}x{img['height']} ({img['area']:,} px, {img['file_size_kb']:.1f}KB)")
        
        if (img['area'] > 50000 and 
            img['file_size_kb'] > 10 and 
            0.5 <= img['aspect_ratio'] <= 3.0 and 
            len(gallery_images) < max_count):
            
            gallery_images.append(img)
    
    return gallery_images

def main():
    image_dir = "/Users/tomjimmy/Documents/SRM/public/images/brigade_valencia"
    
    print("Analyzing Brigade Valencia brochure images...")
    images_info = analyze_images(image_dir)
    
    print(f"\nFound {len(images_info)} images total")
    
    gallery_images = select_gallery_images(images_info)
    
    print(f"\nSelected {len(gallery_images)} images for gallery:")
    
    gallery_array = []
    for i, img in enumerate(gallery_images):
        relative_path = f"/images/brigade_valencia/{img['filename']}"
        gallery_array.append(relative_path)
        print(f"{i+1:2d}. {img['filename']} - {img['width']}x{img['height']} ({img['file_size_kb']:.1f}KB)")
    
    # Output the gallery array for easy copy-paste
    print("\nGallery array for project data:")
    print("gallery: [")
    for i, path in enumerate(gallery_array):
        comma = "," if i < len(gallery_array) - 1 else ""
        print(f'  "{path}"{comma}')
    print("],")
    
    # Save to JSON file
    output_file = "/Users/tomjimmy/Documents/SRM/brigade_valencia_gallery.json"
    with open(output_file, 'w') as f:
        json.dump({
            'gallery_paths': gallery_array,
            'selected_images': [
                {
                    'path': f"/images/brigade_valencia/{img['filename']}",
                    'filename': img['filename'],
                    'dimensions': f"{img['width']}x{img['height']}",
                    'size_kb': img['file_size_kb']
                }
                for img in gallery_images
            ]
        }, f, indent=2)
    
    print(f"\nGallery data saved to: {output_file}")

if __name__ == "__main__":
    main()
