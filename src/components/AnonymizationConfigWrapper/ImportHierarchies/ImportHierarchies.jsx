import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AttachFile from '@material-ui/icons/AttachFile';
import FileCopy from '@material-ui/icons/FileCopy';
import Button from '@material-ui/core/Button';
import handleHierarchyUpload from '../../../util/handleHierarchyUpload';


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  input: {
    display: 'none',
  },
}));

const ImportHierarchies = (props) => {
  const classes = useStyles();

  const {
    attributes, setAttributes,
  } = props;

  const [hierarchyLoaded, setHierarchyLoaded] = useState({});

  const content = (
    <div className="hierarchy-import" align="center">
      <div className={classes.root}>
        <List component="nav" aria-label="main mailbox folders">
          {attributes.map(({ field, attributeTypeModel }, index) => {
            if (attributeTypeModel === 'QUASIIDENTIFYING') {
              return (
                <ListItem key={field}>
                  <ListItemIcon>
                    {hierarchyLoaded[index] ? <FileCopy color="primary" /> : <AttachFile /> }
                  </ListItemIcon>

                  <ListItemText primary={field} />

                  <label htmlFor={`contained-button-file-${index}`}>
                    <Button variant="contained" component="span">
                      <input
                        className={classes.input}
                        id={`contained-button-file-${index}`}
                        type="file"
                        onChange={(e) => {
                          if (e.target.files[0]) {
                            const tmp = { ...hierarchyLoaded };
                            tmp[index] = true;
                            setHierarchyLoaded(tmp);
                            handleHierarchyUpload(
                              e.target.files[0], index, attributes, setAttributes,
                            );
                          }
                        }}
                      />
                      Upload
                    </Button>
                  </label>
                </ListItem>
              );
            }
            return null;
          })
        }
        </List>
      </div>
    </div>
  );
  return content;
};
export default ImportHierarchies;
