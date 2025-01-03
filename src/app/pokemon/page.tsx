"use client"
import {useSearchParams} from "next/navigation";
import {useEffect, useState} from "react";
import {getPokemonById} from "@/app/api/pokemon";
import {Alert, Box, Card, CardContent, CardHeader, CardMedia, CircularProgress, Typography} from "@mui/material";
import {Pokemon} from "@/app/types/pokemon";

export default function Home() {
    const searchParams = useSearchParams();
    const pokemonId = searchParams.get('id');
    const [pokemon, setPokemon] = useState<Pokemon | null>(null)
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    useEffect(() => {
        if (!pokemonId) return;
        setLoading(true);
        getPokemonById(pokemonId).then(res => setPokemon(res))
            .catch(err => setError(err.toString())).finally(() => setLoading(false));
    }, [pokemonId]);
    return (
        <Box padding={2}>
            {loading && !error && <CircularProgress />}
            {error && !loading && <Alert severity="error">{error}</Alert>}
            {pokemon && !loading && <Card variant="outlined" sx={{ maxWidth: 400 }}>
                <CardHeader title={pokemon.name}></CardHeader>
                <CardMedia
                    component="img"
                    image={pokemon?.sprites?.other?.dream_world?.front_default}
                    alt={pokemon.name}
                    sx={{ maxWidth: 350 }}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Abilities:
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                        {pokemon?.abilities?.map(({ability}) =>
                            <li key={ability.name}>{ability.name}</li>
                        )}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        Stats:
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                        {pokemon?.stats?.map((stat) =>
                            <li key={stat.stat.name}>{stat.stat.name.replace('-', ' ')}</li>
                        )}
                    </Typography>
                </CardContent>
            </Card>}
        </Box>
    );
}