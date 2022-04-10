import { Grid } from '@mui/material';
import LinkValidObj from 'components/LinkValidObj';
import { collection, onSnapshot } from 'firebase/firestore';
import * as React from 'react';
import db from "../src/services/FirestoreService";


function ValidLinks() {
    var listId = "corsilink";
    const [linkList, setLinkList] = React.useState([]);
    React.useEffect(() => {
        if (listId) {
            onSnapshot(collection(db, listId), (snapshot) => {
                setLinkList(
                    snapshot.docs.map(
                        (doc) => ({
                            id: doc.id,
                            data: doc.data(),
                        }))
                );
            })
        }
    }, [listId]);

    return (
        <>
            <Grid
                container
                direction="column"
                justifyContent="flex-start"
                alignItems="center"
                spacing={4}
                pt={3}
                mb={3}
            >
                {linkList.map((item) =>
                    <Grid item  >
                        <LinkValidObj id={item.id} data={item.data} />
                    </Grid>
                )}
            </Grid>
        </>
    );
}

export default ValidLinks;
