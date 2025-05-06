<script>
    import { Button } from "../lib/components/ui/button";
    import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../lib/components/ui/card";
    
    // Get data from Symfony if available
    let symfonyData = {};
    if (typeof window !== 'undefined' && window.SYMFONY_DATA) {
        symfonyData = window.SYMFONY_DATA;
    }
    
    let name = symfonyData.initialName || 'world';
</script>

<main class="container mx-auto p-4">
    <Card class="w-full max-w-md mx-auto">
        <CardHeader>
            <CardTitle>Hello {name}!</CardTitle>
            <CardDescription>Welcome to your new Svelte + Symfony app with shadcn-svelte!</CardDescription>
        </CardHeader>
        <CardContent>
            <div class="grid w-full items-center gap-4">
                <div class="flex flex-col space-y-1.5">
                    <label for="name" class="text-sm font-medium">Name</label>
                    <input 
                        type="text" 
                        id="name" 
                        bind:value={name} 
                        class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                        placeholder="Enter your name"
                    />
                </div>
            </div>
        </CardContent>
        <CardFooter class="flex justify-between">
            <Button variant="outline">Cancel</Button>
            <Button>Save</Button>
        </CardFooter>
    </Card>
</main> 