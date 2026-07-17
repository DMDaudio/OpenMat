// OpenMat runtime configuration.
//
// Fill these two values in to enable accounts + cross-device cloud sync.
// BOTH are safe to commit publicly:
//   - supabaseUrl is just your project's address.
//   - supabaseAnonKey is a PUBLIC client key. Data access is protected by
//     Supabase Row-Level Security (see supabase/schema.sql), not by hiding it.
//
// While these are empty, OpenMat runs fully local-only (progress saved in the
// browser). See SETUP.md for the step-by-step setup.
window.OPENMAT_CONFIG = {
  supabaseUrl: "https://rkuympxokdvhgvdxldcr.supabase.co",
  supabaseAnonKey: "sb_publishable_sBAjncHNH0xT783C3H_BQA_3d-errff",
};
