import {
    Paper,
    Container,
    Typography,
    Box,
    Rating,
    Stack,
    Avatar,
    useTheme,
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { motion } from 'motion/react';
import { fadeInUpLeft } from '@/theme/animations';

const MotionPaper = motion.create(Paper);

const CommentCard = ({ item }) => {
    const { userName, comment, rating, date } = item;
    const theme = useTheme();

    const gold = theme.palette.primary.main;

    function stringAvatar(name) {
        return {
            sx: {
                bgcolor: gold
            },
            children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
        };
    }

    return (
        <MotionPaper
            variants={fadeInUpLeft}
            elevation={0}
            sx={{
                background: 'transparent',
                position: 'relative',
                zIndex: 3,
                p: 4,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                borderRadius: 4,
                border: '2px solid',
                borderColor: 'divider',
                '&:hover': {
                    borderColor: 'primary.main',
                    transform: 'translateY(-8px)',
                    transition: 'all 0.3s ease',
                },
            }}
        >
            <Stack spacing={2} sx={{display: 'flex', flex: 1}}>
                <Container sx={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                    <Avatar {...stringAvatar(userName)} />
                    <Typography variant="h6" sx={{ fontWeight: 700}}>
                        {userName}
                    </Typography>
                </Container>
                <Typography variant="body1" sx={{ fontWeight: 400, mb: 1 }}>
                    {date}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{flexGrow: 1}}>
                    {comment}
                </Typography>
                <Box>
                    <Rating
                        name="text-feedback"
                        value={rating}
                        readOnly
                        precision={0.5}
                        emptyIcon={
                            <StarIcon
                                style={{ opacity: 0.55 }}
                                fontSize="inherit"
                            />
                        }
                    />
                </Box>
            </Stack>
        </MotionPaper>
    );
};

export default CommentCard;
