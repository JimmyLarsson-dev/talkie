import AsyncStorage from "@react-native-async-storage/async-storage";

const apiKey = "redacted for github"

export async function talkToAi(userInput) {

    let maxToken = AsyncStorage.getItem("maxTokens")
    let temperature = AsyncStorage.getItem("temperature")

    try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages : [{
                    role: "user",
                    content: `${userInput}`
                }],
                max_tokens: parseInt(await maxToken),
                temperature: parseFloat(await temperature)
            }),
        })
            const data = await response.json()
        console.log(data)
            return {success: true, data: data.choices[0].message.content}
    } catch (error) {
        return {success: false, error: error.message};
    }
}
