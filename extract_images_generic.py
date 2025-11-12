#!/usr/bin/env python3
"""
Extract images from any brochure PDF
"""

import fitz  # PyMuPDF
import os
import sys
from PIL import Image
import io

def extract_images_from_pdf(pdf_path, output_dir, project_name):
    """Extract all images from a PDF file"""
    
    # Create output directory if it doesn't exist
    os.makedirs(output_dir, exist_ok=True)
    
    # Open the PDF
    pdf_document = fitz.open(pdf_path)
    
    image_count = 0
    extracted_images = []
    
    # Iterate through each page
    for page_num in range(len(pdf_document)):
        page = pdf_document[page_num]
        
        # Get list of images on the page
        image_list = page.get_images()
        
        print(f"Page {page_num + 1}: Found {len(image_list)} images")
        
        # Extract each image
        for img_index, img in enumerate(image_list):
            try:
                # Get image data
                xref = img[0]
                base_image = pdf_document.extract_image(xref)
                image_bytes = base_image["image"]
                image_ext = base_image["ext"]
                
                # Skip if no valid extension
                if not image_ext:
                    continue
                
                # Create filename
                image_filename = f"{project_name}_{image_count + 1}.{image_ext}"
                image_path = os.path.join(output_dir, image_filename)
                
                # Save image
                with open(image_path, "wb") as image_file:
                    image_file.write(image_bytes)
                
                # Verify the image can be opened (quality check)
                try:
                    with Image.open(image_path) as pil_img:
                        # Check minimum size (skip very small images like icons)
                        if pil_img.width < 100 or pil_img.height < 100:
                            os.remove(image_path)
                            continue
                        
                        # Convert to JPEG if not already
                        if image_ext.lower() != 'jpeg' and image_ext.lower() != 'jpg':
                            jpeg_path = os.path.join(output_dir, f"{project_name}_{image_count + 1}.jpeg")
                            pil_img.convert('RGB').save(jpeg_path, 'JPEG', quality=90)
                            os.remove(image_path)
                            image_path = jpeg_path
                            image_filename = f"{project_name}_{image_count + 1}.jpeg"
                
                except Exception as e:
                    print(f"Error processing image {image_filename}: {e}")
                    if os.path.exists(image_path):
                        os.remove(image_path)
                    continue
                
                print(f"Extracted: {image_filename}")
                extracted_images.append(image_filename)
                image_count += 1
                
            except Exception as e:
                print(f"Error extracting image {img_index} from page {page_num + 1}: {e}")
                continue
    
    pdf_document.close()
    
    print(f"\nTotal images extracted: {len(extracted_images)}")
    print(f"Images saved to: {output_dir}")
    
    return extracted_images

def main():
    if len(sys.argv) != 4:
        print("Usage: python extract_images_generic.py <pdf_path> <output_dir> <project_name>")
        print("Example: python extract_images_generic.py 'Brigade Avalon.pdf' 'public/images/brigade_avalon' 'brigade_avalon'")
        sys.exit(1)
    
    pdf_path = sys.argv[1]
    output_dir = sys.argv[2]
    project_name = sys.argv[3]
    
    print(f"Extracting images from: {pdf_path}")
    print(f"Output directory: {output_dir}")
    print(f"Project name: {project_name}")
    
    if not os.path.exists(pdf_path):
        print(f"Error: PDF file not found: {pdf_path}")
        sys.exit(1)
    
    extracted_images = extract_images_from_pdf(pdf_path, output_dir, project_name)
    
    if extracted_images:
        print(f"\nSuccess! Extracted {len(extracted_images)} images")
        print("First few images:")
        for img in extracted_images[:5]:
            print(f"  - {img}")
    else:
        print("\nNo images were extracted")

if __name__ == "__main__":
    main()
