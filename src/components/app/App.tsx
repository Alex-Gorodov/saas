import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Layout } from '../layout/layout';
import { PageNotExist } from '../../pages/page-not-exist/page-not-exist';
import { TasksPage } from '../../pages/tasks/tasks-page';
import { DashboardPage } from '../../pages/dashboard/dashboard-page';
import { EmailPage } from '../../pages/email/email-page';
import { ContactsPage } from '../../pages/contacts/contacts-page';
import { ChatPage } from '../../pages/chat/chat-page';
import { DealsPage } from '../../pages/deals/deals-page';
import { SettingsPage } from '../../pages/settings/settings-page';

export function App(): JSX.Element {
  return (
        <Routes>
          <Route path={AppRoute.Root} element={<Layout/>}>
            <Route index path={AppRoute.Dashboard} element={<DashboardPage/>}/>
            <Route path={AppRoute.Tasks} element={<TasksPage/>}/>
            <Route path={AppRoute.Email} element={<EmailPage/>}/>
            <Route path={AppRoute.Contacts} element={<ContactsPage/>}/>
            <Route path={AppRoute.Chat} element={<ChatPage/>}/>
            <Route path={AppRoute.Deals} element={<DealsPage/>}/>
            <Route path={AppRoute.Settings} element={<SettingsPage/>}/>
          </Route>
          <Route path="*" element={<PageNotExist/>}></Route>
        </Routes>
  );
}
