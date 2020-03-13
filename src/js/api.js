import axios from 'axios'
export function get(url,params,serviceSuccessCallBack,serviceErrorCallBack) {
    return new Promise((resolve,reject)=>{
        axios.get(url,{params:params})
            .then(res=>{
                //请求成功
                if(res.status == 200){
                    if(serviceSuccessCallBack == null){
                        console.log("serviceSuccessCallback()")
                    }else{
                        serviceSuccessCallBack(res)
                        console.log(res)
                    }
                }else{
                    serviceSuccessCallBack(res)
                }
                resolve(res.data)
            }).catch(err =>{
                //请求失败
            console.log("error")
            reject(err.data)
            serviceErrorCallBack(err)
        })
    })
}
export  function post(url,params,serviceSuccessCallBack,serviceErrorCallBack) {
    let header = {};
        header ={
            'X-Requested-With': 'XMLHttpRequest',
            'Content-Type': 'application/json;charset=UTF-8',
        }
        const options = {
            method: 'POST',
            headers: header,
            data: params,
            url:url
        };
        return new Promise((resolve, reject) => {
            axios(options)
                .then(res=>{
                    //请求成功
                    if(res.status == 200){
                        if(serviceSuccessCallBack ==null){
                            console.log("serviceSuccessCallback()")
                        }else{
                            serviceSuccessCallBack(res)
                            console.log(res)
                        }
                    }else{
                        serviceSuccessCallBack(res);
                    }
                    resolve(res.data)
                }).catch(err => {
                //请求失败
                reject(err.data)
                serviceErrorCallBack(err)
            })
        })
}