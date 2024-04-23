import { useState } from 'react';
import { Box, Grid, GridItem } from '@chakra-ui/react';

const OthelloGame = () => {
  const [board, setBoard] = useState(Array(8).fill(Array(8).fill(null)));

  const handleCellClick = (row, col) => {
    setBoard(board.map((r, ri) => ri === row ? r.map((c, ci) => ci === col ? c === 'black' ? null : 'black' : c) : r));
  };

  return (
    <Box p={4}>
      <Grid templateColumns="repeat(8, 1fr)" gap={1}>
        {board.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <GridItem w="40px" h="40px" bg={cell ? 'black' : 'green.500'} key={`${rowIndex}-${colIndex}`} onClick={() => handleCellClick(rowIndex, colIndex)} />
          ))
        )}
      </Grid>
    </Box>
  );
};

export default OthelloGame;