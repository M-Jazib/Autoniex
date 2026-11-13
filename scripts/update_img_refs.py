import sys

files = [
    r"c:\Users\mianh\Downloads\Autoniex\src\components\Hero3D.tsx",
    r"c:\Users\mianh\Downloads\Autoniex\src\components\Portfolio.tsx",
    r"c:\Users\mianh\Downloads\Autoniex\src\components\PortfolioModal.tsx",
    r"c:\Users\mianh\Downloads\Autoniex\src\app\layout.tsx",
]

for f in files:
    try:
        with open(f, 'r', encoding='utf-8') as fh:
            content = fh.read()
        new_content = content.replace('.jpg', '.webp').replace('.jpeg', '.webp')
        if new_content != content:
            with open(f, 'w', encoding='utf-8') as fh:
                fh.write(new_content)
            print(f"Updated: {f}")
        else:
            print(f"No changes: {f}")
    except Exception as e:
        print(f"Error {f}: {e}")
print("Done.")
