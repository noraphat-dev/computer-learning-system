from playwright.sync_api import sync_playwright
import time

def verify():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Navigate to Module 5 directly by going to skill tree and picking a skill, or just by hash
        page.goto("http://localhost:3000/#/skill/operating-system-driver-operating-system")
        page.wait_for_timeout(2000)
        page.screenshot(path="m5_os.png", full_page=True)

        browser.close()

if __name__ == "__main__":
    verify()
