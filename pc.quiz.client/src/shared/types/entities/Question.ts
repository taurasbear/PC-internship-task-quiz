import { QuestionType } from "../enums/QuestionType";
import { AnswerOption } from "./AnswerOption";

export interface Question {
    id: number,
    title: string,
    type: QuestionType,
    answerOptions: AnswerOption[]
}