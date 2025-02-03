function compareTime(datestring1,datestring2)
{
    let timedate1 = new Date(datestring1);
    let timedate2 = new Date(datestring2);

    return timedate1>timedate2;
}

module.exports = {
    compareTime
}