import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

import { generateName } from '../../utils/generateName';

import nextId from 'react-id-generator';

export const items = new Array(100)
    .fill({ url: 'https://source.unsplash.com/random/200x300' })
    .map((item, index) => {
        const htmlId = nextId();
        const img = `${item.url}?${index}`;
        return (
            <ListItem key={htmlId} alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src={img} />
                </ListItemAvatar>
                <ListItemText
                    primary={generateName()}
                    sx={{ color: '#ddddde' }}
                    secondary={
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="#ddddde"
                        >
                            {`Оуу бро — Какой-то очень интересный текст обо мне № ${index}`}
                        </Typography>
                    }
                />
            </ListItem>
        );
    });
