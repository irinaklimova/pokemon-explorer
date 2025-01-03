"use client"

import {Alert, Box, CircularProgress} from "@mui/material";
import {useEffect, useState} from "react";
import {getAllPokemon} from "@/app/api/pokemon";
import {Pokemon} from "@/app/types/pokemon";
import PokemonTable from "@/app/components/pokemons-table";
import * as React from "react";

const PAGE_SIZE = 10;

export default function Home() {
    const [rows, setRows] = useState<Pokemon[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [offset, setOffset] = useState(0);
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (rows.length > offset) return;
        setLoading(true);
        getAllPokemon(PAGE_SIZE, offset).then(res => {
            setRows([...rows, ...res.results]);
            setCount(res.count)
        }).catch(err => setError(err.toString())).finally(() => setLoading(false));
    }, [offset]);

    function handleChangePage(e: any, page: number) {
        const newOffset = page*PAGE_SIZE;
        setOffset(newOffset);
    }
    return (
        <div>
            <main>
                <Box
                    padding={2}
                    sx={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    }}
                    >
                    {loading && !error && <CircularProgress />}
                    {error && !loading && <Alert severity="error">{error}</Alert>}
                    {!!rows.length && !error && !loading && <PokemonTable page={offset ? offset/PAGE_SIZE : offset} count={count} pageSize={PAGE_SIZE} rows={rows.slice(offset, offset + PAGE_SIZE)} handleChangePage={handleChangePage}/>}
                </Box>
            </main>
        </div>
    );
}
