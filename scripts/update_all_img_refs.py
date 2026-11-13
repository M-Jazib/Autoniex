import os

# All source files that might reference .jpg images
files = [
    r"c:\Users\mianh\Downloads\Autoniex\src\data\portfolioData.ts",
    r"c:\Users\mianh\Downloads\Autoniex\src\context\SiteContext.tsx",
    r"c:\Users\mianh\Downloads\Autoniex\src\components\PortfolioModal.tsx",
    r"c:\Users\mianh\Downloads\Autoniex\src\components\Portfolio.tsx",
]

for f in files:
    if not os.path.exists(f):
        print(f"Not found: {f}")
        continue
    try:
        with open(f, 'r', encoding='utf-8') as fh:
            content = fh.read()
        # Only replace .jpg inside /images/ path references
        new_content = content.replace('/images/bloom-storefront.jpg', '/images/bloom-storefront.webp')
        new_content = new_content.replace('/images/ledger-bot.jpg', '/images/ledger-bot.webp')
        new_content = new_content.replace('/images/nova-crm.jpg', '/images/nova-crm.webp')
        new_content = new_content.replace('/images/orbit-marketing.jpg', '/images/orbit-marketing.webp')
        new_content = new_content.replace('/images/pulse-analytics.jpg', '/images/pulse-analytics.webp')
        new_content = new_content.replace('/images/sage-agent.jpg', '/images/sage-agent.webp')
        if new_content != content:
            with open(f, 'w', encoding='utf-8') as fh:
                fh.write(new_content)
            print(f"Updated: {f}")
        else:
            print(f"No .jpg refs found: {f}")
    except Exception as e:
        print(f"Error {f}: {e}")
print("Done.")
