import { QuestionType } from '../../shared/types/enums/QuestionType';

type QuestionHandler<T> = () => T;

export const handleQuestionType = <T>(
    questionType: QuestionType,
    handleSingle: QuestionHandler<T>,
    handleMultiple: QuestionHandler<T>,
    handleText: QuestionHandler<T>
): T => {
    switch (questionType) {
        case QuestionType.Single:
            return handleSingle();
        case QuestionType.Multiple:
            return handleMultiple();
        case QuestionType.Text:
            return handleText();
        default:
            throw new Error(`Unsupported question type: ${questionType}`);
    }
};