#!/usr/bin/env python3
"""
Extract images from Brigade Valencia brochure PDF
"""

import fitz  # PyMuPDF
import os
from PIL import Image
import io

def extract_images_from_pdf(pdf_path, output_dir):
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
            # Get image data
            xref = img[0]
            base_image = pdf_document.extract_image(xref)
            image_bytes = base_image["image"]
            image_ext = base_image["ext"]
            
            # Create filename
            image_filename = f"brigade_valencia_{image_count + 1}.{image_ext}"
            image_path = os.path.join(output_dir, image_filename)
            
            # Save image
            with open(image_path, "wb") as image_file:
                image_file.write(image_bytes)
            
            print(f"Extracted: {image_filename}")
            extracted_images.append(image_filename)
            image_count += 1
    
    pdf_document.close()
    return extracted_images

def main():
    pdf_path = "/Users/tomjimmy/Documents/SRM/public/brochures/Brigade Valencia - Brillio brochure-1.pdf"
    output_dir = "/Users/tomjimmy/Documents/SRM/public/images/brigade_valencia"
    
    print(f"Extracting images from: {pdf_path}")
    print(f"Output directory: {output_dir}")
    
    try:
        extracted_images = extract_images_from_pdf(pdf_path, output_dir)
        print(f"\nSuccessfully extracted {len(extracted_images)} images:")
        for img in extracted_images:
            print(f"  - {img}")
            
        # Also convert PDF pages to images as fallback
        print("\nConverting PDF pages to images...")
        convert_pdf_pages_to_images(pdf_path, output_dir)
        
    except Exception as e:
        print(f"Error: {e}")

def convert_pdf_pages_to_images(pdf_path, output_dir):
    """Convert PDF pages to high-quality images"""
    try:
        from pdf2image import convert_from_path
        
        # Convert PDF to images
        pages = convert_from_path(pdf_path, dpi=300)
        
        for i, page in enumerate(pages):
            page_filename = f"brigade_valencia_page_{i + 1}.jpg"
            page_path = os.path.join(output_dir, page_filename)
            page.save(page_path, "JPEG", quality=95)
            print(f"Converted page {i + 1}: {page_filename}")
            
    except ImportError:
        print("pdf2image not available, skipping page conversion")
    except Exception as e:
        print(f"Error converting pages: {e}")

if __name__ == "__main__":
    main()
