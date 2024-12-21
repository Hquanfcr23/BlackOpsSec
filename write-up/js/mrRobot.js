window.onload = function() {
    const fileUrl = '../doc/MrRobot.docx'; // Đường dẫn tới file Word trong thư mục doc

    fetch(fileUrl)
        .then(response => response.arrayBuffer())
        .then(arrayBuffer => {
            // Chuyển đổi file Word thành HTML bằng Mammoth.js
            mammoth.convertToHtml({ arrayBuffer: arrayBuffer })
                .then(function(result) {
                    // Hiển thị nội dung trong phần #output
                    document.getElementById('output').innerHTML = result.value;
                })
                .catch(function(err) {
                    console.error("Error converting file: ", err);
                    alert("Có lỗi xảy ra khi xử lý file.");
                });
        })
        .catch(function(err) {
            console.error("Error fetching file: ", err);
            alert("Không thể tải file.");
        });
};
