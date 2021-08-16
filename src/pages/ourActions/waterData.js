const getRandomInt = () => {
    return 22
}
const getRandomUsed = () => {
    let min = 150;
    let max = 500;
    let num = Math.floor(Math.random() * (max - min + 1)) + min;
    return String(num)
}
const getRandomReplenished = () => {
    let min = 150;
    let max = 500;
    let num = Math.floor(Math.random() * (max - min + 1)) + min;
    return String(num)
}

export const waterData = [
    { id: 'AP', state: 'Andhra Pradesh', value: getRandomInt(),Sumunnati_Supported: getRandomUsed(), All_FPOs: getRandomReplenished()  },
    { id: 'AR', state: 'Arunachal Pradesh', value: getRandomInt() , Sumunnati_Supported: getRandomUsed(), All_FPOs: getRandomReplenished() },
    { id: 'AS', state: 'Assam', value: getRandomInt() , Sumunnati_Supported: getRandomUsed(), All_FPOs: getRandomReplenished() },
    { id: 'BR', state: 'Bihar', value: getRandomInt() , Sumunnati_Supported: getRandomUsed(), All_FPOs: getRandomReplenished() },
    { id: 'CT', state: 'Chhattisgarh', value: getRandomInt() , Sumunnati_Supported: getRandomUsed(), All_FPOs: getRandomReplenished() },
    { id: 'GA', state: 'Goa', value: getRandomInt() , Sumunnati_Supported: getRandomUsed(), All_FPOs: getRandomReplenished() },
    { id: 'GJ', state: 'Gujarat', value: getRandomInt() , Sumunnati_Supported: getRandomUsed(), All_FPOs: getRandomReplenished() },
    { id: 'HR', state: 'Haryana', value: getRandomInt() , Sumunnati_Supported: getRandomUsed(), All_FPOs: getRandomReplenished() },
    { id: 'HP', state: 'Himachal Pradesh', value: getRandomInt() , Sumunnati_Supported: getRandomUsed(), All_FPOs: getRandomReplenished() },
    { id: 'JH', state: 'Jharkhand', value: getRandomInt() , Sumunnati_Supported: getRandomUsed(), All_FPOs: getRandomReplenished() },
    { id: 'KA', state: 'Karnataka', value: getRandomInt() , Sumunnati_Supported: getRandomUsed(), All_FPOs: getRandomReplenished() },
    { id: 'KL', state: 'Kerala', value: getRandomInt() , Sumunnati_Supported: getRandomUsed(), All_FPOs: getRandomReplenished() },
    { id: 'MP', state: 'Madhya Pradesh', value: getRandomInt() , Sumunnati_Supported: getRandomUsed(), All_FPOs: getRandomReplenished() },
    { id: 'MH', state: 'Maharashtra', value: getRandomInt() , Sumunnati_Supported: getRandomUsed(), All_FPOs: getRandomReplenished() },
    { id: 'MN', state: 'Manipur', value: getRandomInt() , Sumunnati_Supported: getRandomUsed(), All_FPOs: getRandomReplenished() },
    { id: 'ML', state: 'Meghalaya', value: getRandomInt() , Sumunnati_Supported: getRandomUsed(), All_FPOs: getRandomReplenished() },
    { id: 'MZ', state: 'Mizoram', value: getRandomInt() , Sumunnati_Supported: getRandomUsed(), All_FPOs: getRandomReplenished() },
    { id: 'NL', state: 'Nagaland', value: getRandomInt() , Sumunnati_Supported: getRandomUsed(), All_FPOs: getRandomReplenished() },
    { id: 'OD', state: 'Odisha', value: getRandomInt() , Sumunnati_Supported: getRandomUsed(), All_FPOs: getRandomReplenished() },
    { id: 'PB', state: 'Punjab', value: getRandomInt() , Sumunnati_Supported: getRandomUsed(), All_FPOs: getRandomReplenished() },
    { id: 'RJ', state: 'Rajasthan', value: getRandomInt() , Sumunnati_Supported: getRandomUsed(), All_FPOs: getRandomReplenished() },
    { id: 'SK', state: 'Sikkim', value: getRandomInt() , Sumunnati_Supported: getRandomUsed(), All_FPOs: getRandomReplenished() },
    { id: 'TN', state: 'Tamil Nadu', value: getRandomInt() , Sumunnati_Supported: getRandomUsed(), All_FPOs: getRandomReplenished() },
    { id: 'TS', state: 'Telangana', value: getRandomInt() , Sumunnati_Supported: getRandomUsed(), All_FPOs: getRandomReplenished() },
    { id: 'TR', state: 'Tripura', value: getRandomInt() , Sumunnati_Supported: getRandomUsed(), All_FPOs: getRandomReplenished() },
    { id: 'UK', state: 'Uttarakhand', value: getRandomInt() , Sumunnati_Supported: getRandomUsed(), All_FPOs: getRandomReplenished() },
    { id: 'UP', state: 'Uttar Pradesh', value: getRandomInt() , Sumunnati_Supported: getRandomUsed(), All_FPOs: getRandomReplenished() },
    { id: 'WB', state: 'West Bengal', value: getRandomInt() , Sumunnati_Supported: getRandomUsed(), All_FPOs: getRandomReplenished() },
    { id: 'WB', state: 'West Bengal', value: getRandomInt() , Sumunnati_Supported: getRandomUsed(), All_FPOs: getRandomReplenished() },
    { id: 'AN', state: 'Andaman and Nicobar Islands', value: getRandomInt() , Sumunnati_Supported: getRandomUsed(), All_FPOs: getRandomReplenished() },
    { id: 'CH', state: 'Chandigarh', value: getRandomInt() , Sumunnati_Supported: getRandomUsed(), All_FPOs: getRandomReplenished() },
    { id: 'DN', state: 'Dadra and Nagar Haveli', value: getRandomInt() , Sumunnati_Supported: getRandomUsed(), All_FPOs: getRandomReplenished() },
    { id: 'DD', state: 'Daman and Diu', value: getRandomInt() , Sumunnati_Supported: getRandomUsed(), All_FPOs: getRandomReplenished() },
    { id: 'DL', state: 'Delhi', value: getRandomInt() , Sumunnati_Supported: getRandomUsed(), All_FPOs: getRandomReplenished() },
    { id: 'JK', state: 'Jammu and Kashmir', value: getRandomInt() , Sumunnati_Supported: getRandomUsed(), All_FPOs: getRandomReplenished() },
    { id: 'LA', state: 'Ladakh', value: getRandomInt() , Sumunnati_Supported: getRandomUsed(), All_FPOs: getRandomReplenished() },
    { id: 'LD', state: 'Lakshadweep', value: getRandomInt() , Sumunnati_Supported: getRandomUsed(), All_FPOs: getRandomReplenished() },
    { id: 'PY', state: 'Puducherry', value: getRandomInt() , Sumunnati_Supported: getRandomUsed(), All_FPOs: getRandomReplenished() }
]

export const getStateData = (currentState) => {
    var result = waterData.find(obj => {
        return obj.id === currentState
    })
    console.log(result)
    return [result]
}