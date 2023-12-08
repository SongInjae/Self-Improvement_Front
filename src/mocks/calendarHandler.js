import { HttpResponse, http } from 'msw';

const todayPlan = {};

const calendarHandler = [
  http.post('api/todayPlan', async ({ request }) => {
    const data = await request.json();
    data.checked = false;

    const date = String(data.date);

    if (!todayPlan[date]) {
      todayPlan[date] = [];
    }

    todayPlan[date].push(data);

    return new HttpResponse(null, { status: 201 });
  }),

  http.get('api/todayPlan/:date', async ({ params }) => {
    const { date } = params;
    if (todayPlan[date])
      return HttpResponse.json(todayPlan[date], { status: 200 });
    else return HttpResponse.json([], { status: 200 });
  }),
];

export default calendarHandler;
