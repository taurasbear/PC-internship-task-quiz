import { QuestionType } from "../enums/QuestionType";
import { AnswerOption } from "./AnswerOption";
import { EntryAnswer } from "./EntryAnswer";

export interface Question {
    id: number,
    title: string,
    type: QuestionType,
    answerOptions: AnswerOption[]
    entryAnswers: EntryAnswer[]
}