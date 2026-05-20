from PIL import Image

def get_bbox(img_path):
    img = Image.open(img_path)
    if img.mode != 'RGBA':
        img = img.convert('RGBA')
    bbox = img.getbbox()
    width, height = img.size
    print(f"{img_path}: Size={width}x{height}, BBox={bbox}")
    if bbox:
        print(f"Content Size={bbox[2]-bbox[0]}x{bbox[3]-bbox[1]}")

get_bbox('public/images/vol-1-3d_1.png')
get_bbox('public/images/vol-2-3d_1.png')
