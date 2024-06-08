// Định nghĩa hàm để click vào nút theo XPath
function clickButton() {
    // Tìm phần tử bằng XPath
    var xpath = "//button[contains(@class, 'Button_btn__XqmXE') and contains(@class, 'Button_icon__5EAcg') and contains(@class, 'Button_size0__H1b0g') and contains(@class, 'Tap_tapBtn__3IPK2')]";
    var button = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

    if (button) {
        button.click();
    } else {
        console.log("Button not found!");
    }
}

// Thực hiện click vào nút 100 lần với khoảng thời gian chờ giữa các lần click (để tránh quá tải)
for (let i = 0; i < 100; i++) {
    setTimeout(clickButton, i * 100); // 100ms giữa các lần click
}
