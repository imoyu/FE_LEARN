function getCommentList() {
    $.ajax({
        url: 'http://www.liulongbin.top:3006/api/cmtlist',
        method: 'GET',
        success(res) {
            if (res.status !== 200) {
                return alert('获取评论列表失败！');
            }
            const rows = [];
            res.data.forEach((item) => {
                var str = '<li class="list-group-item"><span class="badge" style="background-color: #F0AD4E;">评论时间：' + item.time + '</span><span class="badge" style="background-color: #5BC0DE;">评论人：' + item.username + '</span>' + item.content + '</li>'
                rows.push(str);
            });
            $('#cmt-list').empty().append(rows.join(''))
        },
        error(XMLHttpRequest, textStatus, errorThrown) {
            alert(`请求失败 ${errorThrown}`);
        }
    })
}

getCommentList()

$(function () {
    $('#formAddCmt').on('submit', function (event) {
        event.preventDefault();
        let param = $(this).serialize();
        $.ajax({
            url: 'http://www.liulongbin.top:3006/api/addcmt',
            method: 'POST',
            data: param,
            success(res) {
                if (res.status !== 201) {
                    return alert('发表评论失败！');
                }
                getCommentList();
                // 获取原生 dom，重置表单
                $('#formAddCmt')[0].reset();
            }
        });
    })
})