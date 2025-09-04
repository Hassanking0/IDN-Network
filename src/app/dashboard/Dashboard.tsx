import { ChartAreaInteractive } from '@/components/chart-area-interactive'
import { setDarkMode } from '@/lib/utils'
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'

const Dashboard = () => {
	return (
		<div className='w-full p-4'>
			<div className='header flex justify-end items-center mb-2 mx-7'>
				{/* <button
					onClick={() =>
						setDarkMode(!document.documentElement.classList.contains('dark'))
					}
					className='rounded-lg px-4 py-2 border'
				>
					Toggle theme
				</button> */}
				<Card className='w-100'>
					<CardHeader>
						<CardTitle>Proflie Completion</CardTitle>
						{/* <CardAction>Card Action</CardAction> */}
					</CardHeader>
					<CardContent className='text-center flex justify-between gap-4'>
						<div>
							<p>Distribution Channels</p>
							<p>0%</p>
						</div>
						<div>
							<p>Add Social Media</p>
							<p>0%</p>
						</div>
					</CardContent>
				</Card>
			</div>

			{/* <SiteHeader /> */}
			<div className='flex flex-1 flex-col'>
				<div className='@container/main flex flex-1 flex-col gap-2'>
					<div className='flex flex-col gap-4 py-4 md:gap-6 md:py-6'>
						{/* <SectionCards /> */}
						<div className='px-4 lg:px-6'>
							<ChartAreaInteractive title='Total Bookings' />
						</div>
						<div className='px-4 lg:px-6'>
							<ChartAreaInteractive title='Total Revenue' />
						</div>
						{/* <DataTable data={data} /> */}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Dashboard
