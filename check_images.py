#!/usr/bin/env python3
"""
Check if Brigade Valencia images are accessible via the web server
"""

import requests
import json

def check_image_accessibility():
    """Check if the Brigade Valencia images are accessible"""
    
    base_url = "http://localhost:3001"
    
    # Load the gallery data
    with open("/Users/tomjimmy/Documents/SRM/brigade_valencia_gallery.json", 'r') as f:
        gallery_data = json.load(f)
    
    print("Checking Brigade Valencia image accessibility...")
    
    accessible_images = []
    inaccessible_images = []
    
    for img_data in gallery_data['selected_images']:
        image_url = f"{base_url}{img_data['path']}"
        
        try:
            response = requests.head(image_url, timeout=5)
            if response.status_code == 200:
                accessible_images.append(img_data)
                print(f"✅ {img_data['filename']} - {img_data['dimensions']} ({img_data['size_kb']:.1f}KB)")
            else:
                inaccessible_images.append(img_data)
                print(f"❌ {img_data['filename']} - HTTP {response.status_code}")
        except Exception as e:
            inaccessible_images.append(img_data)
            print(f"❌ {img_data['filename']} - Error: {e}")
    
    print(f"\n📊 Summary:")
    print(f"✅ Accessible: {len(accessible_images)}/{len(gallery_data['selected_images'])}")
    print(f"❌ Inaccessible: {len(inaccessible_images)}/{len(gallery_data['selected_images'])}")
    
    if len(accessible_images) > 0:
        print(f"\n🎉 SUCCESS: Brigade Valencia now has {len(accessible_images)} real brochure images!")
        print("You can now view the project at: http://localhost:3001/projects/3")
    else:
        print(f"\n⚠️ No images are accessible. Please check the development server.")

if __name__ == "__main__":
    check_image_accessibility()
