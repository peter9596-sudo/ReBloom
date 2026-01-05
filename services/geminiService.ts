
import { GoogleGenAI, Type } from "@google/genai";

const getAI = () => new GoogleGenAI({ apiKey: process.env.API_KEY });

export const analyzePlantImage = async (base64Image: string) => {
  const ai = getAI();
  const model = 'gemini-3-flash-preview';
  
  const prompt = `
    당신은 화훼 전문가입니다. 제공된 이미지 속의 화환이나 화분을 분석하여 다음 정보를 JSON 형식으로 제공해주세요:
    1. 식물의 이름이나 종류
    2. 현재 상태 (S, A, B 급)
    3. 꽃집 사장님이 재매입하기에 적당한 추천 가격 범위 (원화 기준)
    4. 상품의 가치를 높이기 위한 간단한 조언
  `;

  const response = await ai.models.generateContent({
    model,
    contents: {
      parts: [
        { inlineData: { data: base64Image, mimeType: 'image/jpeg' } },
        { text: prompt }
      ]
    },
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          name: { type: Type.STRING },
          condition: { type: Type.STRING },
          recommendedPriceRange: { type: Type.STRING },
          advice: { type: Type.STRING }
        },
        required: ["name", "condition", "recommendedPriceRange", "advice"]
      }
    }
  });

  return JSON.parse(response.text);
};

export const chatWithExpert = async (message: string, history: {role: string, parts: {text: string}[]}[]) => {
  const ai = getAI();
  const chat = ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: '당신은 화환 및 화분 중고 거래 플랫폼 "리블룸(ReBloom)"의 전문 상담원입니다. 판매자와 구매자 사이의 중재를 돕고 식물 관리에 대한 조언을 제공합니다. 친절하고 전문적인 말투를 사용하세요.'
    }
  });

  const response = await chat.sendMessage({ message });
  return response.text;
};
