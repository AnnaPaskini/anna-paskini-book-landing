import os
from PIL import Image

def trim_transparency(img_path, out_path):
    img = Image.open(img_path)
    if img.mode != 'RGBA':
        img = img.convert('RGBA')
    
    bbox = img.getbbox()
    if bbox:
        # crop to bounding box
        img_cropped = img.crop(bbox)
        # Add 20px padding just to be safe
        width, height = img_cropped.size
        padded = Image.new('RGBA', (width + 40, height + 40), (0, 0, 0, 0))
        padded.paste(img_cropped, (20, 20))
        padded.save(out_path)
        print(f"Trimmed {img_path}: Original={img.size}, Cropped={padded.size}")
    else:
        print(f"Failed to trim {img_path}")

trim_transparency('public/images/vol-1-3d.png', 'public/images/vol-1-3d_cropped.png')
trim_transparency('public/images/vol-2-3d.png', 'public/images/vol-2-3d_cropped.png')
