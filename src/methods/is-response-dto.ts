export default function isResponseDto(oValue: any) {
    if (typeof oValue !== "object") {
        return false;
    }

    return ("code" in oValue && "messageCode" in oValue) === true;
};
