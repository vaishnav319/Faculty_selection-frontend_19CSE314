import React from 'react';
import { Box , Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import Slide from 'react-reveal/Slide';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const data = [
    {
        question: 'What is Kapable Learning?',
        answer: <>
            We are an after-school skill development program which focuses on children’s holistic development by empowering them with 21st Century skills. Empowered with skills to think better, speak better and work better- our kids become independent thinkers, innovators, confident communicators, and leaders.</>
    },
    {
        question: 'Why should my child join Kapable?',
        answer: <>
            In today's ever-evolving environment of unpredictability and change, we need to help our children strive and thrive! Our gamified and activity-based learning program complements academics with skills that help children stay relevant and navigate through various real-life challenges. Irrespective of the career your child chooses, these life learning and literacy skills help them succeed in the present as well as future.
        </>
    },
    {
        question: 'What are the class timings?',
        answer: <>
            Class timings are flexible based on your convenience! We offer 2 classes a week, each class duration being 60 minutes. You can choose between the following 3 combinations:
            <ul>
                <li>Tuesday & Thursday</li>
                <li>Wednesday & Friday</li>
                <li>Saturday & Sunday</li>
            </ul>
            For the above days, we have multiple slots each day between 11.30 am and 9 pm.</>
    },
    {
        question: 'What is the class strength?',
        answer: <>To ensure that each student derives maximum value from the sessions, our classes are designed to have only 4-5 students in each batch. This ensures personalized learning journeys for each child increasing student progress and parent delight</>
    },
    {
        question: 'What is the refund policy?',
        answer: <>We are confident that you and your child will love Kapable classes. 
        However, we offer a full refund up to the beginning of the third session.
         No hassle, no questions asked.</>
    },
    {
        question: 'Are the classes pre-recorded?',
        answer: <>
            No, we believe in the magic of interactions and two-way conversations. In our live, online classes, kids never mute themselves. Instead, we have kids participate with the facilitator and their peers in the learning process
        </>
    },
    {
        question: 'Are Kapable Trainers different from others?',
        answer:
            <>
                Kapable trainers offer a unique activity-based learning experience for your child, very different from the subjective learning offered in school. Our trainers(top 1%) are adept in communication and training skills and are handpicked after multiple rounds of interviews and evaluations.
            </>
    },
    {
        question: 'What is the Kapable experience like?        ',
        answer:
            <>
                Your child will be a part of interactive activity-based classes with a small group of peers and a trainer they love. Additionally, a designated Learning team would customize your child’s learning experience and share regular feedback with you. We have combined all these to build an experience that is engaging for students, trusted by parents and loved by trainers.
            </>
    },
]
const Faqs = () => {
    return <div>
        <Box className="container" sx={{ margin: { md: '100px auto', xs: '50px auto' } }}>
            <Slide bottom>
                <Typography textAlign="center" sx={{ fontWeight: "bold", fontSize: { md: "48px", xs: "31px" }, lineHeight: { md: "70px", xs: '48px' }, color: "#1b1b1b" }}>
                    Frequently Asked Questions (FAQs)
                </Typography>
            </Slide >
            <Box sx={{ marginTop: { md: '50px', xs: '10px' } }} />
            <Slide bottom>
                {data.map((item, i) => (
                    <Accordion sx={{ background: 'transparent', boxShadow: 'none', border: '2px solid #37B57E', mt: 3 }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon sx={{ color: '#37B57E' }} />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Box display="flex" sx={{ alignItems: { md: 'center', xs: "flex-start" } }} gap="10px">
                                <Typography sx={{ fontSize: { md: '31px', xs: '22px' }, fontWeight: '500', lineHeight: '46px', color: '#37B57E' }}>
                                    Q. </Typography>
                                <Typography sx={{ fontSize: '20px', fontWeight: '500', lineHeight: '30px' }}>
                                    {item.question}</Typography>
                            </Box>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Box display="flex" alignItems="flex-start" gap="10px">
                                <Typography sx={{ fontSize: '31px', fontWeight: '500', lineHeight: '46px', color: '#227aeb' }}>
                                    A. </Typography>
                                <Typography color='#565656'>
                                    {item.answer}
                                </Typography>
                            </Box>

                        </AccordionDetails>
                    </Accordion>
                ))}
            </Slide >
        </Box>
    </div>;
};

export default Faqs;
