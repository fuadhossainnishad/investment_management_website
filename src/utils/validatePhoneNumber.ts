import { CountryCode, parsePhoneNumberFromString } from "libphonenumber-js"

export const ValidatePhoneNumber = async (countryCode: CountryCode = 'BD', phoneNumber: string): Promise<boolean> => {
    const phone = parsePhoneNumberFromString(phoneNumber, countryCode)
    return phone?.isValid() ?? false
}

