import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://nfjlyoteubvmfrrjjuwn.supabase.co';

const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5mamx5b3RldWJ2bWZycmpqdXduIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM4MjM2NjEsImV4cCI6MjA2OTM5OTY2MX0.qVc5njb0MFnPpeaW886Zz0ZyVk1kG4XBsh12okDnEw4';

export const supabase = createClient(supabaseUrl, supabaseKey);