export interface questionModel {
  id?: string;
  orderNo: number;
  type: string;
  required: boolean;
  question: {
    text: string;
    placeholder?: string;
    type: string;
    offeredAnswers?: {
      id?: string;
      orderNo: number;
      value: string;
      remarkAnswer?: boolean;
      remarkAnswerValue?: string;
    }[];
    otherAnswer?: boolean;
    otherAnswerValue?: string;
  };
}
