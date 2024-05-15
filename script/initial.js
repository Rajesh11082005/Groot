
function initial_loader(){
    let arr = {
        "0": {
            "name": "Name",
            "cate": 0,
            "opt": [
                "0"
            ],
            "extra": "null"
        },
        "1": {
            "name": "DOB",
            "cate": 0,
            "opt": [
                "2"
            ],
            "extra": "null"
        },
        "2": {
            "name": "Gender",
            "cate": 0,
            "opt": [
                "5"
            ],
            "extra": null
        },
        "3": {
            "name": "Address",
            "cate": 3,
            "opt": [
                "5"
            ],
            "extra": null
        },
        "4": {
            "name": "Email",
            "cate": 0,
            "opt": [
                "4"
            ],
            "extra": "null"
        }
    }
    loader(arr);
    let ele = document.createElement("input-custom-element");
    INPUT_SECTION.appendChild(ele);
}


initial_loader();
