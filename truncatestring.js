function truncateString(string, number) {
    if (string.length > number) {
        let truncString = string.slice(0, number);
        console.log(truncString + "...");
    } else console.log(string)
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);