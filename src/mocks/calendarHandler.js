import { HttpResponse, http } from 'msw';

const todayPlan = [];

const calendarHandler = [
  http.post('api/todayPlan', async ({ request }) => {
    const data = await request.json();
    data.checked = false;

    todayPlan.push(data);
    console.log(todayPlan);
    return new HttpResponse(null, { status: 201 });
  }),

  http.get('api/calendar', async ({ params }) => {
    const param = params;

    console.log(param);
    return HttpResponse.json(todayPlan, { status: 200 });
  }),
];

export default calendarHandler;
