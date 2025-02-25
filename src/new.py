import requests

url = "http://10.180.0.5:1000/"

headers = {
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "Accept-Language": "en-US,en;q=0.9",
    "Cache-Control": "max-age=0",
    "Connection": "close",  # Changed from keep-alive to close
    "Content-Type": "application/x-www-form-urlencoded",
    "Origin": "http://10.180.0.5:1000",
    "Referer": "http://10.180.0.5:1000/",
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1"
}

data = {
    "4Tredir": "http://www.msftconnecttest.com/redirect",
    "magic": "0129d879237f9dd6",
    "username": "2023001106",
    "password": "123"
}

try:
    response = requests.post(url, headers=headers, data=data, verify=False, timeout=10)
    print("Status Code:", response.status_code)
    print("Response Text:", response.text)
except requests.exceptions.RequestException as e:
    print("Error:", e)
    