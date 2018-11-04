let timer;

function alarm() {
    timer = setTimeout(() => {
        chrome.notifications.create(undefined, {
            type: "basic",
            iconUrl: 'images/icon.svg',
            title: '스트레칭 알리미',
            message: '50분이 되었습니다. 스트레칭 하세요.'
        }, (nid) => {
            console.log(nid);
        })
        alarm();
    }, 1000 * 60 * 50)
}

chrome.runtime.onStartup.addListener(() => {
    alarm();
});

chrome.extension.onConnect.addListener(function (port) {
    port.onMessage.addListener(function () {
        clearTimeout(timer);
        alarm();
    });
})
chrome.notifications.create(undefined, {
    type: "basic",
    iconUrl: 'images/icon.svg',
    title: '스트레칭 알리미',
    message: '50분이 되었습니다. 스트레칭 하세요.'
}, (nid) => {
    console.log(nid);
})