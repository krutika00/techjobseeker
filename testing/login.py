from time import sleep
from selenium import webdriver
from selenium.webdriver.common.by import By
# create webdriver object
driver = webdriver.Chrome()
# get login page
driver.get("D:\msc-project\job-portal-project\job-frontend\src\login\Components\Login.js")
sleep(30)
# get element
element = driver.find_elements(By.ID, 'email')
#print elements
print(element)