function BoardItem({item}) {
    return (
        <table style={{margin: "20px auto"}} border="2" width="100%" cellPadding="3" cellSpacing="0" key={item.id}>
            <tr>
                <td><strong>제목</strong></td>
                <td>{item.title}</td>
            </tr>
            <tr>
                <td><strong>내용</strong></td>
                <td>{item.content}</td>
            </tr>
            <tr>
                <td><strong>일시</strong></td>
                <td>{item.regdate.toLocaleString()}</td>
            </tr>
        </table>
    )
}

export default BoardItem;