# coding=utf-8
import urllib2
import urllib
import sys
import re

reload(sys)
sys.setdefaultencoding("utf-8")

def getResponse(url):
    response = urllib2.urlopen(url)
    return response.read().decode('utf-8')


def getListWithName(name):
    nameEncode = urllib.quote(name.decode('UTF-8').encode('utf-8'))
    content = getResponse('http://www.okzy.me/index.php?m=vod-search&wd=' + nameEncode)
    patten = re.compile(
        '<li.*?xing_vb4"><a href="(.*?)" target="_blank">(.*?)</a.*?xing_vb5">(.*?)</span.*?xing_vb6">(.*?)</span></li>')
    items = re.findall(patten, content)
    return items


def getResourceUrl(item):
    url = 'http://www.okzy.me' + item[0]
    content = getResponse(url)
    patten = re.compile('<li><input type="checkbox" name="copy_sel" value="(.*?)" checked="" />.*?</li> ')
    list = re.findall(patten, content)
    return list

name = sys.argv[1]
items = getListWithName(name)
list = getResourceUrl(items[0])
index = 0
for item in list:
    print '第'+bytes(index+1)+'集: '+item.encode('utf-8')
    index = index+1
    if index > len(list)/2-1:
        break
