## Getting Started

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Solution notes:
This two requirements I had to skip:
* Add functionality to filter Pokémon by type.
* Implement a search feature that filters Pokémon by name. 

Since there are no search or filtering on the backed,
to implement search and filtering I would need to load all the data (which includes request for each Pokemon)
before user would want to go to next page or filter by type or search by name.
That would be noticeable delay for a user and violation requirement for loading data efficiently, in my opinion.
And this decision also correlates with time box (4 hours) was given for the task.

