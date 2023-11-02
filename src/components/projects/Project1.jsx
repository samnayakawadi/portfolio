import requirements from "../services/images/requirements.png"

const Project1 = () => {

    const data = [
        {
            logo: requirements,
            title: "Course Drive",
            description: "Instructor can see all questions & quizzes in separate tabs under each topics. All the questions & quizzes created in topics will be displayed in course. Here instructor can create new question after choosing specific question type. In the same way, Instructor can create new quiz or else directly import the questions from excel through import editor. There is Delete button to delete the question or quiz."
        },
        {
            logo: requirements,
            title: "Question Editors",
            description: "Depending upon question type these question editors are selected. There are several tabs for each question. Like Question & Answers, Scoring, Feedback, Options, MetaData. These includes different values. Instructor can add question & answer related data in Question & Answer tab. Question Max Score can be added to Scoring tab. Correct Answer Feedback or Wrong Answer Feedback can be added to Feedback tab. Options shuffling can be selected from options tab. And question difficulty can be updated from metaData tab."
        },
        {
            logo: requirements,
            title: "Quiz & Section Editor",
            description: "Instructor can select the questions from Question Bank. And add multiple sections inside Test Structure. To add the question, Instructor needs to select the section from Test Structure. Also the questions in Question Bank are loaded depending upon the location selected from Course Drive. There are multiple tabs for Quiz Settings & Sections. You will see there are sub-tabs in question editor when you add them to Test Structure. These sub-tabs are named as Question & Quiz. The changes made in Quiz tab will be applied to Quiz & Not to the actual question."
        },
        {
            logo: requirements,
            title: "Assign Editor",
            description: "Here you will see the enrolled users list. This is fetched from the LMS API. Instructor can enter the email address associated to user to search them. Then instructor can select the user & add them to Assigned Users list. Here, The window displaying the date & time selection will be enabled. Here as name suggests, Instructor can change the assigned from & assigned to date. Also instructor can update the number of attempts & can also stop the specific learner to get the access. This can be done for multiple users at a time."
        },
        {
            logo: requirements,
            title: "Import Editor",
            description: "Here, you first need to select the location from course drive. Then the easy to understand instructions are given at the beginning of the editor. Instructor can download the excel template. Add questions as per the format & then import the excel through Question Importer by Selecting the file. The list of question will be show. Here instructor can also update the questions & resolve the issue if any. And finally Submit All the questions."
        },
        {
            logo: requirements,
            title: "Quiz Delivery",
            description: "Here, this tool allows to select the quizzes to learner, Then it verifies the the dates, time & number of allowed attempts. After this step, The learner can start the new exam. Then learner will be directed to the exam delivery. HEre there are multiple sections, like Sections, as per the sections, The questions list. And then the question area that includes the question & options. The learner can go to any question or section through navigation panel. The quiz will be automatically submitted as soon as the time is complete. If the quiz is practice quiz. Then, The learner will see even more options like feedback."
        },
        {
            logo: requirements,
            title: "Safe Exam Browser",
            description: "SEB can disable various system functions and keyboard shortcuts to prevent students from using features like copy-paste, printing, screen capture, external monitor or accessing system settings. SEB typically allows only one instance of the browser to run, and it restricts the opening of new tabs or windows. This ensures that the student remains within the confines of the exam environment."
        }
    ]

    return (
        <div className="bg-project1 text-white container-padding-x container-padding-y">
            <div className="flex flex-row justify-center items-center gap-10">
                <div className="basis-6/12">
                    <h4 className="-tracking-tighter uppercase font-light text-lg pb-3 text-gray-400">My Corporate Project</h4>
                    <h1 className="text-7xl font-bold">Online Assessment Tool</h1>
                    <h4 className="text-lg pt-5 text-gray-400">A flexible, one-stop solution for all types of online knowledge assessments. Enterprise technology. Explore our key features and much more.</h4>
                    <div className="flex flex-row gap-5 pt-5">
                        <a href="https://drive.google.com/drive/folders/1rer3lzrMQK_2w-JqVGmM640w3Y7S3OS5?usp=drive_link" target="_blank" rel="noreferrer" className="text-white hover:text-redColor cursor-pointer pb-2 hover:border-b-2 hover:border-redColor">See Presentations</a>
                        <a href="https://drive.google.com/drive/folders/1dkKvIFWXMQfRnzWnF2oLs9uTnFXx0jx9?usp=sharing" target="_blank" rel="noreferrer" className="text-white hover:text-redColor cursor-pointer pb-2 hover:border-b-2 hover:border-redColor">See Manuals</a>
                        <a href="https://meghsikshak.in/" target="_blank" rel="noreferrer" className="text-white hover:text-redColor cursor-pointer pb-2 hover:border-b-2 hover:border-redColor">Contact Sales</a>
                    </div>
                </div>
                <div className="basis-6/12">
                    <div className="pt-5">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/I_lPY5jiGQI?si=GMV-hLdLlovAzqSR" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
            <div className="pt-20">
                <div className="grid grid-cols-1 gap-5">
                    {data.map((singleItem, itemIndex) => {
                        return (
                            <div key={itemIndex} className="p-10 bg-project1TileBg rounded-lg py-14 hover:bg-project1TileBgOnHover transition ease-linear delay-75 hover:scale-100 hover:cursor-pointer">
                                {/* <img src={singleItem.logo} className="w-20" /> */}
                                <h1 className="text-xl font-semibold">{singleItem.title}</h1>
                                <h3 className="text-lg pt-3">{singleItem.description}</h3>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Project1