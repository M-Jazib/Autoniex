"""
Convert JPEG images in public/images/ to WebP format.
Run: python scripts/convert_to_webp.py
"""
import os
import sys

try:
    from PIL import Image
    print("Pillow found, converting images...")
    USE_PILLOW = True
except ImportError:
    USE_PILLOW = False
    print("Pillow not installed. Run: pip install Pillow")
    print("Trying alternative method...")

images_dir = os.path.join(os.path.dirname(os.path.dirname(__file__)), "public", "images")

if USE_PILLOW:
    total_saved = 0
    for fname in os.listdir(images_dir):
        if fname.lower().endswith(('.jpg', '.jpeg', '.png')):
            src = os.path.join(images_dir, fname)
            name_no_ext = os.path.splitext(fname)[0]
            dst = os.path.join(images_dir, name_no_ext + ".webp")
            
            orig_size = os.path.getsize(src)
            
            with Image.open(src) as img:
                # Convert to RGB if needed (PNG with alpha -> RGBA)
                if img.mode in ('RGBA', 'P'):
                    img = img.convert('RGBA')
                else:
                    img = img.convert('RGB')
                img.save(dst, 'WEBP', quality=82, method=6)
            
            new_size = os.path.getsize(dst)
            saved = orig_size - new_size
            pct = (saved / orig_size) * 100
            total_saved += saved
            print(f"  {fname} -> {name_no_ext}.webp  ({orig_size//1024}KB -> {new_size//1024}KB, -{pct:.0f}%)")
    
    print(f"\nTotal saved: {total_saved//1024} KB")
    print("\nNow update image references in Hero3D.tsx and Portfolio.tsx from .jpg to .webp")
else:
    print("\nPlease install Pillow:")
    print("  pip install Pillow")
    print("Then re-run this script.")
