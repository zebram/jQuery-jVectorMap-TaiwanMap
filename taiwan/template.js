function regionHoverTemplate(can){
    return `<tr>
            <td>${can.party}</td>
            <td>${can.no}</td>
            <td>${can.name}</td>
            <td>${can.votes}</td>
            <td>(${can.rate})</td>
        </tr>`;
}
function labelTemplate(city,content){
    return `<table cellspacing="0">
    <tr>
    <td>${city}</td>
    </tr>
    <tr class="header">
    <th>政黨</th><th>號碼</th><th>候選人</th><th>得票數</th><th>(得票率)</th>
    </tr>
    ${content}
    </table>`;
}
