import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AttachFile from '@material-ui/icons/AttachFile';
import FileCopy from '@material-ui/icons/FileCopy';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Divider from '@material-ui/core/Divider';
import handleHierarchyUpload from '../../../../../util/handleHierarchyUpload';
import handleHierarchyFileUpload from '../../../../../util/handleHierarchyFileUpload';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  input: {
    display: 'none',
  },
  deleteButton: {
    backgroundColor: '#dc3545',
    margin: '0 0 0 1em',
  },
});

const ImportHierarchies = (props) => {
  const classes = useStyles();

  const {
    hierarchies, setHierarchies,
    attributes, setAttributes,
  } = props;

  const content = (
    <div className="hierarchy-import" align="center">
      <div className={classes.root}>
        <List component="nav" aria-label="main mailbox folders">
          {attributes.map(({ field, attributeTypeModel }, index) => {
            if (attributeTypeModel === 'QUASIIDENTIFYING') {
              return (
                <div key={field}>
                  <Divider />
                  <ListItem>
                    {attributes[index].hierarchy
                      ? (
                        <Tooltip title={attributes[index].hierarchy.name} placement="top">
                          <ListItemIcon>
                            <FileCopy color="primary" />
                          </ListItemIcon>
                        </Tooltip>

                      )
                      : (
                        <ListItemIcon>
                          <AttachFile />
                        </ListItemIcon>
                      )}
                    <ListItemText primary={field} />
                    <label htmlFor={`contained-button-file-${index}`}>
                      <Button variant="contained" component="span">
                        <input
                          className={classes.input}
                          id={`contained-button-file-${index}`}
                          type="file"
                          onChange={(e) => {
                            if (e.target.files[0]) {
                              handleHierarchyFileUpload(
                                e.target.files[0], hierarchies, setHierarchies,
                              );
                              handleHierarchyUpload(
                                e.target.files[0], index, attributes, setAttributes, hierarchies,
                              );
                            }
                          }}
                        />
                        Import
                      </Button>
                    </label>
                  </ListItem>

                </div>
              );
            }
            return null;
          })}
        </List>
      </div>
    </div>
  );
  return content;
};
export default ImportHierarchies;
