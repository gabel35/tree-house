export function updatePostData(adDetails, storageName = 'postAdData') {
    try {
        if (typeof window.localStorage != 'undefined') {
            let data = JSON.parse(localStorage.getItem(storageName)) || []
            adDetails.id = Date.now()
            data.push(adDetails)
            localStorage.setItem(storageName, JSON.stringify(data))
        }
    } catch (e) {
        console.log('updatepostAd LC Error', e)
    }
}

export function editPostData(dataList, storageName = 'postAdData') {
    try {
        if (typeof window.localStorage != 'undefined') {
            localStorage.setItem(storageName, JSON.stringify(dataList))
        }
    } catch (e) {
        console.log('updatepostAd LC Error', e)
    }
}

export function getPostData(storageName = 'postAdData') {
    try {
        if (typeof window.localStorage != 'undefined') {
            let data = JSON.parse(localStorage.getItem(storageName)) || []
            return data
        } else {
            return []
        }
    } catch (e) {
        console.log('getPostAd LC Error', e)
    }
}



