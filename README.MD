# Present Connection internship task

## A simple quiz web app

This project is built with React (TypeScript) and ASP.NET Core with an in-memory database.

### About web app
There are 3 question types:
- Radio buttons
- Checkboxes
- Textboxes

The user has to go through 10 questions and if they score high enough, they appear on the leaderboard among the top 10 highest scored entries.

### Backend Key Points
- **Clean/Onion architecture** implementation
- Using **CQRS** and **Mediator** design patterns
- Exception Filters

### Frontend Key Points
- TanStack + Axios API layer in frontend
- Material UI[^3]
- Vite

### Database schema
![alt text](database-schema.png)

### Needed improvements
- Exception handling middleware
- Code style consistency
- Better React context management
- Unit or other tests
- Query key storage
- Environment variable usage
- Repository interface comments

### Screenshots of web app
![Example of test question](quiz-example-1.png)

![Example of test validation](quiz-example-2.png)

![Example of start menu](quiz-example-3.png)

### Instructions

#### Visual Studio 2022
1. Open solution file
2. Start project[^1]
3. Web app should launch in browser[^2]

#### VS Code (Frontend project only)
1. Go to 'pc.quiz.client' in terminal
2. Run command:

```
npm run dev
```

### Additional Information

[^1]: It's possible certain errors will appear due to certificates not being able to be generated. In which case, I recommend using manual solutions to create a certificate.

[^2]: If the browser doesn't open up by itself, you can copy and go to the localhost URL.

[^3]: Decided for in-line CSS for styling components instead of CSS modules due to better compatibility.