import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'

export function ButtonGhost() {
	return <Button variant='ghost'>Ghost</Button>
}

const Client = () => {
	return (
		<div className='w-full p-4'>
			<Card className='w-full'>
				<CardHeader className='space-y-2'>
					<CardTitle className='text-2xl font-normal'>Create Client</CardTitle>
					<CardDescription>
						Add a new client in your list even if they aren't on the platform.
						They will be notified via email, allowing you to create rides and
						send invoices.
					</CardDescription>
				</CardHeader>
			</Card>
			<div className='main grid grid-cols-2 gap-4 mt-4 mx-4'>
				<div className='grid w-full max-w-sm items-center gap-3'>
					<Label htmlFor='name'>Name</Label>
					<Input
						type='email'
						id='email'
						placeholder="Enter your client's full name"
					/>
				</div>
				<div className='grid w-full max-w-sm items-center gap-3'>
					<Label htmlFor='email'>Email</Label>
					<Input
						type='email'
						id='email'
						placeholder="Enter your client's email address"
					/>
				</div>
				<div className='grid w-full max-w-sm items-center gap-3'>
					<Label htmlFor='email'>Phone</Label>
					<Input
						type='email'
						id='email'
						placeholder="Enter your client's Phone Number"
					/>
				</div>
				<div className='grid w-full max-w-sm items-center gap-3'>
					<Label htmlFor='email'>Search</Label>
					<Input type='email' id='email' placeholder='Search' />
				</div>
			</div>
			<div className='buttons'>
				<div className='btn1'>
					<Button variant='ghost'>Cancel</Button>
				</div>
				<div className='btn2-3'>
					<Button variant='ghost'>Save and Create Another</Button>{' '}
					<div className='flex flex-wrap items-center gap-2 md:flex-row'>
						<Button>Button</Button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Client
