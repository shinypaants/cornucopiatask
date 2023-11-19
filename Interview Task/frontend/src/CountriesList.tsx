import { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TablePagination, TableRow } from '@mui/material';
import Paper from '@mui/material/Paper';



// Using TablePagination as libphonenumber imported all country codes
function CountriesList() {
    const [countries, setCountries] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
  
    const handleChangePage = (event: unknown, newPage: number) => {
      setPage(newPage);
    };
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await axios.get('/country/supported');
                setCountries(response.data);
            } catch (error) {
                console.error('Error fetching countries', error);
            }
        };

        fetchCountries();
    }, []);

    

    return (
        <div>
            <h2>Supported Countries</h2>
            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 450 }} aria-label="simple table">
                <TableBody>
                    {countries.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((country) => {
                        return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={country}>
                            <TableCell component="th" scope="row">
                            {country}
                            </TableCell>
                        </TableRow>
                    );
                        })}
                </TableBody>
                </Table>
                <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={countries.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
            </TableContainer>
        </div>
    );
}

export default CountriesList;
